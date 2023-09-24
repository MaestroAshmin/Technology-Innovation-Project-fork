<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class ChatController extends Controller
{
    //
    public function chat(Request $request)
    {
        try {
            // Get the message from the request
            $userMessage = $request->input('message');

            if (!$userMessage) {
                return response()->json(['message' => 'Message is required'], 400);
            }

            // Prepare the data request
            $requestData = [
                'model' => 'gpt-3.5-turbo',
                'messages' => [
                    ['role' => 'system', 'content' => 'You are a helpful assistant.'],
                    ['role' => 'user', 'content' => $userMessage],
                ],
                'temperature' => 0.7,
                'max_tokens' => 150,
            ];

            // Make the API request
            $response = Http::withHeaders([
                'Authorization' => 'Bearer ' . config('services.openai.api_key'),
            ])->post('https://api.openai.com/v1/chat/completions', $requestData);

            // Handle the response
            if ($response->successful()) {
                $chatResponse = $response->json()['choices'][0]['message']['content'] ?? 'Sorry, I could not understand that.';
                return response()->json(['message' => $chatResponse]);
            } else {
                Log::error('OpenAI API Error', ['error' => $response->body()]);
                return response()->json(['message' => 'Failed to communicate with OpenAI API'], 500);
            }
        } catch (\Exception $e) {
            Log::error('Exception occurred', ['exception' => $e->getMessage()]);
            return response()->json(['message' => 'An error occurred while processing your request'], 500);
        }

    }
}
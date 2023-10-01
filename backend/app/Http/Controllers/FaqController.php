<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Faq;

class FaqController extends Controller
{
    // add new question and answer to the database
    function addFaq(Request $req) 
    {   
        // Validate the request data
        $validator = Validator::make($req->all(), [
            'question' => 'required|string|max:255|unique:faq,question',
            'answer' => 'required|string',
        ]);

        // Check if validation fails
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Validation Error',
                $validator->errors()
            ], 400);
        }

        // Create a new req
        $faq = new Faq;
        $faq->question = $req->input('question');
        $faq->answer = $req->input('answer');
        $faq->save();

        return $faq;
    }

    // get a single product from the database
    function getFaq($id)
    {   
        // find the faq with provided id
        $faq = Faq::find($id);

        // return if the faq is not found
        if (!$faq) {
            return response()->json([
                'status' => false, 
                'message' => 'FAQ not found!'
            ], 404);
        }

        return $faq;
    }

    // edit questions in the database
    function updateFaq(Request $req, $id)
    {   
        // Find the question with the provided id
        $faq = Faq::find($id);

        // Return if the faq is not found
        if (!$faq) {
            return response()->json([
                'status' => false, 
                'message' => 'FAQ not found!'
            ], 404);
        }

        // Validate the request data
        $validator = Validator::make($req->all(), [
            'question' => 'required|string|max:255|unique:faq,question,' . $id,
            'answer' => 'required|string',
        ]);

        // Check if validation fails
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Validation Error',
                $validator->errors()
            ], 400);
        }
        
        // update the data
        $faq->question = $req->input('question');
        $faq->answer = $req->input('answer');
        $faq->save();

        return $faq;
    }

    // list all question and answer from database
    function listFaq()
    {   
        // find all faqs 
        $faqs = Faq::all();

        // return not found message if the list is empty
        if ($faqs->isEmpty()) {
            return response()->json([
                'status' => false,
                'message' => 'No FAQs found!'
            ]);
        }

        return $faqs;
    }

    // delete a question in the database
    function deleteFaq($id)
    {   
        // find the faq with provided id;
        $faq = Faq::find($id);

        // return error message if the faq is not found
        if (!$faq) {
            return response()->json([
                'status' => false,
                'message' => 'FAQ not found!'
            ], 404);
        }
        
        // delete the found faq
        $faq->delete();

        return response()->json([
            'status' => true,
            'message' => 'FAQ ' . $id . ' deleted successfully!'
        ], 200);

    }

    // search for a frequent question and answer
    function searchFaq($key)
    {
        return Faq::where('question', 'like', "%$key%")->get();
    }
}

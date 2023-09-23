<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Faq;

class FaqController extends Controller
{
    // add new question and answer to the database
    function addFaq(Request $req) 
    {   
        $faq = new Faq;
        $faq->question = $req->input('question');
        $faq->answer = $req->input('answer');
        $faq->save();

        return $faq;
    }
    // get a single product from the database
    function getFaq($id)
    {
        return Faq::find($id);
    }

    // edit questions in the database
    function updateFaq(Request $req, $id)
    {   
        $faq = Faq::find($id);
        $faq->question = $req->input('question');
        $faq->answer = $req->input('answer');
        $faq->save();

        return $faq;
    }

    // list all question and answer from database
    function listFaq()
    {
        return Faq::all();
    }

    // delete a question in the database
    function deleteFaq($id)
    {
        $result = Faq::where('faq_id', $id)->delete();
        if ($result) 
        {
            return $id;
        }
    }

    // search for a frequent question and answer
    function searchFaq($key)
    {
        return Faq::where('question', 'like', "%$key%")->get();
    }
}

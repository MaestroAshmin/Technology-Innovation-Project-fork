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
    // edit questions in the database

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
}

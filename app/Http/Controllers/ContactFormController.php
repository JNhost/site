<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Mail;
use romanzipp\Turnstile\Rules\TurnstileCaptcha; 

class ContactFormController extends Controller
{
    public function contact(){
        return view('home');
    }

    public function contactPost(Request $request){
        $this->validate($request, [
                        'name' => 'required',
                        'email' => 'required|email',
                        'comment' => 'required|max:5000',
                        'cf-turnstile-response' => ['required']
                ]);

        Mail::send('email', [
                'name' => $request->get('name'),
                'email' => $request->get('email'),
                'comment' => $request->get('comment') ],
                function ($message) {
                        $message->from('noreply@jnhost.net');
                        $message->to('form@jnhost.net', 'JNHost Forms')
                                ->subject('Contact Form');
        });

        return back()->with('success', 'Success!');

    }
}
import React, { useRef, useState } from 'react';

function Subscribe() {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef(null);
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState('');

  const subscribe = async (e) => {
    e.preventDefault();

    // 3. Send a request to our API with the user's email address.
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    const { error } = await res.json();

    if (error) {
      // 4. If there was an error, update the message in state.
      setMessage(error);

      return;
    }

    // 5. Clear the input value and show a success message.
    inputEl.current.value = '';
    setMessage('Success! 🎉 You are now subscribed to the newsletter.');
  };

  return (
      <section>
        <div className="bg-mongoose-400">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
                <div className="lg:w-auto lg:flex-1">
                    <h2 className="text-3xl font-extrabold tracking-tight text-almond-300 sm:text-4xl" id="newsletter-headline">
                        Sign up for our Newsletter
                    </h2>
                    <p className="mt-3 max-w-xl text-lg leading-6 text-mongoose-900">
                    Stay up to date with the latest news from us on new products, deals, tips and more.
                    </p>
                </div>
                <div className="mt-8 lg:mt-0 lg:ml-8">
                <form onSubmit={subscribe} className="sm:flex">
                    <label htmlFor="email-input" className="sr-only">{'Email Address'}</label>
                    <input
                        className="w-full px-5 py-3 border border-transparent placeholder-almond-700 focus:ring-2 focus:ring-offset-2 focus:ring-offset-rose-bud-500 focus:ring-white focus:border-white sm:max-w-xs rounded-md"
                        id="email-input"
                        name="email"
                        placeholder="you@awesome.com"
                        ref={inputEl}
                        required
                        type="email"
                    />
                    <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <button type="submit" className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-rose-bud-500 bg-almond-300 hover:bg-almond-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">{'✨ Subscribe 💌'}</button>
                    </div>
                </form>
                <div>
                <p className="mt-3 text-sm text-rose-bud-300">{ message }</p>
                </div>
                <p className="mt-3 text-sm text-mongoose-900">
                We care about the protection of your data. Read our <a href="#" class="text-mongoose-700 font-medium underline hover:text-mongoose-900">Privacy Policy.</a>
                </p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Subscribe;
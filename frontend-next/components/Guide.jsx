import React from 'react'
import Wrapper from './Wrapper'


const Guide = () => {
  return (
    <Wrapper>



            <div className="max-w-screen-xl p-8 mx-auto border border-slate-950 rounded-3xl  my-6">
                <h2 className="mb-12 text-3xl font-extrabold leading-9 text-gray-900 border-b-2 border-gray-400">
                    Guides
                </h2>
                <ul className="flex flex-wrap items-start gap-8 ">
                    <li className="w-2/5">
                        <div className="text-lg font-medium leading-6 text-gray-900">
                            Does my order need to go through customs?
                        </div>
                        <div className="mt-2">
                            <div className="text-base leading-6 text-gray-500">
                                Since your order is dispatched internationally, it has to be cleared through customs. Don't worry—just confirm your delivery information and we'll handle it for you. The delivery date provided at checkout accounts for clearance times.
                                Be aware that some banks may charge a small transaction fee for orders dispatched internationally.                </div>
                        </div>
                    </li>
                    <li className="w-2/5">
                        <div className="text-lg font-medium leading-6 text-gray-900">
                            Can I save my information to make checkout faster?
                        </div>
                        <div className="mt-2">
                            <div className="text-base leading-6 text-gray-500">
                                Yes, you can save your delivery information in your settings prior to your order, and save your payment information when you place an order. Once saved, you can auto-populate your information for the next release.
                            </div>
                        </div>
                    </li>
                    <li className="w-2/5">
                        <div className="text-lg font-medium leading-6 text-gray-900">
                            How will I know if I got a pair?
                        </div>
                        <div className="mt-2">
                            <div className="text-base leading-6 text-gray-500">
                                Keep your browser window open for a few minutes—a message will pop up to let you know if you got a pair or not. We'll also send you an email to let you know, usually within a couple of hours.
                            </div>
                        </div>
                    </li>
                    <li className="w-2/5">
                        <div className="text-lg font-medium leading-6 text-gray-900">
                            Why don't I see Apple Pay as an option?
                        </div>
                        <div className="mt-2">
                            <div className="text-base leading-6 text-gray-500">
                                To see Apple Pay as an option in the Nike App or on Nike.com, you'll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you'll need to use Safari to use Apple Pay on Nike.com.
                            </div>
                        </div>
                    </li>
                    <li className="w-2/5">
                        <div className="text-lg font-medium leading-6 text-gray-900">
                            When will I be refunded?
                        </div>
                        <div className="mt-2">
                            <div className="text-base leading-6 text-gray-500">
                                Once we receive and process your return, we'll inspect it and issue a refund to the payment method you originally used. Refer to our refund information for additional details.
                            </div>
                        </div>
                    </li>
                    <li className="w-2/5">
                        <div className="text-lg font-medium leading-6 text-gray-900">
                            Can I return my Nike By You shoes?
                        </div>
                        <div className="mt-2">
                            <div className="text-base leading-6 text-gray-500">
                                Yes, Nike By You shoes are included in our returns policy. You'll just need to start your return above.
                            </div>
                        </div>
                    </li>
                    <li className="w-2/5">
                        <div className="text-lg font-medium leading-6 text-gray-900">
                            What if I have multiple boxes to return?
                        </div>
                        <div className="mt-2">
                            <div className="text-base leading-6 text-gray-500">
                                You can package your return in multiple packages if needed, but make sure you create a separate return for each box. This helps us process your return faster.
                            </div>
                        </div>
                    </li>
                    <li className="w-2/5">
                        <div className="text-lg font-medium leading-6 text-gray-900">
                            Can I reschedule my pick-up?
                        </div>
                        <div className="mt-2">
                            <div className="text-base leading-6 text-gray-500">
                                Don't worry if you missed your scheduled pick-up—the return carrier will contact you to reschedule. Make sure someone is available to give the package to the carrier.
                            </div>
                        </div>
                    </li>
                </ul>
            </div>


        </Wrapper>
  )
}

export default Guide
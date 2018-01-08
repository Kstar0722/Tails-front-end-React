class FAQ extends React.Component {
	constructor(props) {
		super(props)
    }
    render() {
       return (
		   <div className="container">
		   	<br/>
		       <div className="alert alert-warning alert-dismissible" role="alert">
		           <button type="button" className="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
		           This section contains a wealth of information, related to <strong>Tails Transport</strong> and its services. If you cannot find an answer to your question,
		           make sure to contact us.
		       </div>

		       <br />

		       <div className="" id="accordion">
		           <div className="faqHeader">General questions</div>
		           <div className="card ">
		               <div className="card-header">
		                   <h4 className="card-header">
		                       <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">Is account registration required?</a>
		                   </h4>
		               </div>
		               <div id="collapseOne" className="panel-collapse collapse in">
		                   <div className="card-block">
		                       Account registration at <strong>PrepBootstrap</strong> is only required if you will be selling or buying themes.
		                       This ensures a valid communication channel for all parties involved in any transactions.
		                   </div>
		               </div>
		           </div>
		           <div className="card ">
		               <div className="card-header">
		                   <h4 className="card-header">
		                       <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTen">Some other question that they may have?</a>
		                   </h4>
		               </div>
		               <div id="collapseTen" className="panel-collapse collapse">
		                   <div className="card-block">
		                       A lot of the content of the site has been submitted by the community. Whether it is a commercial element/template/theme
		                       or a free one, you are encouraged to contribute. All credits are published along with the resources.
		                   </div>
		               </div>
		           </div>
		           <div className="card ">
		               <div className="card-header">
		                   <h4 className="card-header">
		                       <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseEleven">What is the currency used for all transactions?</a>
		                   </h4>
		               </div>
		               <div id="collapseEleven" className="panel-collapse collapse">
		                   <div className="card-block">
		                       All prices for themes, templates and other items, including each seller's or buyer's account balance are in <strong>USD</strong>
		                   </div>
		               </div>
		           </div>

		           <div className="faqHeader">Shippers</div>
		           <div className="card ">
		               <div className="card-header">
		                   <h4 className="card-header">
		                       <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">Who can ship stuff?</a>
		                   </h4>
		               </div>
		               <div id="collapseTwo" className="panel-collapse collapse">
		                   <div className="card-block">
		                       Any registed user, who presents a work, which is genuine and appealing, can post it on <strong>PrepBootstrap</strong>.
		                   </div>
		               </div>
		           </div>
		           <div className="card ">
		               <div className="card-header">
		                   <h4 className="card-header">
		                       <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">I want to ship stuff - what are the steps?</a>
		                   </h4>
		               </div>
		               <div id="collapseThree" className="panel-collapse collapse">
		                   <div className="card-block">
		                       The steps involved in this process are really simple. All you need to do is:
		                       <ul>
		                           <li>Register an account</li>
		                           <li>Activate your account</li>
		                           <li>Go to the <strong>Themes</strong> section and upload your theme</li>
		                           <li>The next step is the approval step, which usually takes about 72 hours.</li>
		                       </ul>
		                   </div>
		               </div>
		           </div>
		           <div className="card ">
		               <div className="card-header">
		                   <h4 className="card-header">
		                       <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFive">How much do I get from each shipment?</a>
		                   </h4>
		               </div>
		               <div id="collapseFive" className="panel-collapse collapse">
		                   <div className="card-block">
		                       Here, at <strong>PrepBootstrap</strong>, we offer a great, 70% rate for each seller, regardless of any restrictions, such as volume, date of entry, etc.
		                       <br />
		                   </div>
		               </div>
		           </div>
		           <div className="card ">
		               <div className="card-header">
		                   <h4 className="card-header">
		                       <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseSix">Why ship my items here?</a>
		                   </h4>
		               </div>
		               <div id="collapseSix" className="panel-collapse collapse">
		                   <div className="card-block">
		                       There are a number of reasons why you should join us:
		                       <ul>
		                           <li>A great 70% flat rate for your items.</li>
		                           <li>Fast response/approval times. Many sites take weeks to process a theme or template. And if it gets rejected, there is another iteration. We have aliminated this, and made the process very fast. It only takes up to 72 hours for a template/theme to get reviewed.</li>
		                           <li>We are not an exclusive marketplace. This means that you can sell your items on <strong>PrepBootstrap</strong>, as well as on any other marketplate, and thus increase your earning potential.</li>
		                       </ul>
		                   </div>
		               </div>
		           </div>



		           <div className="faqHeader">Listers</div>
		           <div className="card ">
		               <div className="card-header">
		                   <h4 className="card-header">
		                       <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFour">I want to ship my stuff - what are the steps?</a>
		                   </h4>
		               </div>
		               <div id="collapseFour" className="panel-collapse collapse">
		                   <div className="card-block">
		                       Buying a theme on <strong>PrepBootstrap</strong> is really simple. Each theme has a live preview.
		                       Once you have selected a theme or template, which is to your liking, you can quickly and securely pay via Paypal.
		                       <br />
		                       Once the transaction is complete, you gain full access to the purchased product.
		                   </div>
		               </div>
		           </div>
		           <div className="card ">
		               <div className="card-header">
		                   <h4 className="card-header">
		                       <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseSeven">Is this the latest version of an item</a>
		                   </h4>
		               </div>
		               <div id="collapseSeven" className="panel-collapse collapse">
		                   <div className="card-block">
		                       Each item in <strong>PrepBootstrap</strong> is maintained to its latest version. This ensures its smooth operation.
		                   </div>
		               </div>
		           </div>
				   <br />
		       </div>
		   </div>
	   )
    }
}
export default FAQ

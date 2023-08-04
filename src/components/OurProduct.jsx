import React from 'react';
import Footer from './Footer'
import Navbar from './Navbar';
import ScrollToTopButton from './ScrollToTopButton';
import Fade from 'react-reveal/Fade';

const OurProduct = () => {
  return (
    <div
         id="ourProduct" className="w-full h-screen py-8 mt-4 ">
  <Navbar />
  <div className="mx-auto ml-6 mt-2 py-12 sm:mt-8 flex justify-center">
<p className='font-semibold font-josefin flex justify-center'> 
Birthmark Insurance System  is a management software for Insurance Brokers , Bank Assurance and Agents developed in East Africa by Birthmark Limited.
 </p>

  </div>
  <h2 className='text-xl font-josefin text-[#000e5d] mb-1 font-semibold flex justify-center'>System Features | Main Modules</h2>
  <div className="flex flex-wrap justify-center">
 
        <div className="w-full   sm:w-1/2 md:w-1/3 lg:w-1/2 p-4 ">
        
          <div className="bg-gray-100 font-nunito rounded-lg p-6 lg:m-12 ">
            
            <h2 className="text-2xl font-josefin text-[#4c4c62] font-bold">
            General utilities Features
            </h2>
            <Fade left>
            <p><ul>
              <li>◆ Client - server architecture</li>
              <li>◆ Multi user with excellent user control feature</li>
              <li>◆ Branch network support</li>
              <li>◆ Multi - currency </li>
              <li>◆ SMS and email utility</li>
              <li>◆ DMS - integrated document management system</li>
              <li>◆ Payroll management system</li>
              <li>◆ Front office service</li>
              <li>◆ Pending issues</li>
              <li>◆ Maker - checker feature for all transactions (approvals feature)</li>
              <li>◆ Audit trail</li>
              </ul></p>
              </Fade>
          </div>
          
        </div>
        

        
       
        
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 p-4">
    <div className="bg-gray-100 font-nunito rounded-lg p-6">
      <h2 className="text-2xl font-josefin text-[#4c4c62] font-bold">
        Underwriting Module Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 text-sm">
        <Fade right>
        <div>
          <h1 className="text-lg font-bold">Master Data:</h1>
          <ul>
            <li>◆ Clients information</li>
            <li>◆ Sub-Agency Integration</li>
            <li>◆ Insurance companies</li>
            <li>◆ Insurance products setup</li>
            <li>◆ User-defined policy terms and rates</li>
            <li>◆ Premium calculators</li>
          </ul>
        </div>
        <div>
          <h1 className="text-lg font-bold">Policy Management:</h1>
          <ul>
            <li>◆ Policy registration</li>
            <li>◆ Debit and credit notes</li>
            <li>◆ Endorsements and extensions</li>
            <li>◆ Printing of notes and risk documents</li>
          </ul>
        </div>
        <div>
          <h1 className="text-lg font-bold">Policy Renewals:</h1>
          <ul>
            <li>◆ Renewal lists and notices</li>
            <li>◆ Automatic renewal reminders</li>
            <li>◆ Follow-up notes and lapsed policies</li>
          </ul>
        </div>
        <div>
          <h1 className="text-lg font-bold">Quotations Module:</h1>
          <ul>
            <li>◆ User-defined quotation templates</li>
            <li>◆ Quotation follow-up notes and lists</li>
          </ul>
        </div>
        <div>
          <h1 className="text-lg font-bold">Motor Certificates Management:</h1>
          <ul>
            <li>◆ Receiving and distributing motor certificates</li>
            <li>◆ Printing certificates and declarations</li>
          </ul>
        </div>
        <div>
          <h1 className="text-lg font-bold">Motor Valuations Management:</h1>
          <ul>
            <li>◆ Valuations register and tracking</li>
            <li>◆ Standard valuation letters' templates</li>
          </ul>
        </div>
        </Fade>
      </div>
    </div>
  </div>     
      </div>
      
      <div className="flex flex-wrap justify-center">
   
  <div className="w-full sm:w-1/2 p-4">
    <div className="bg-gray-100 font-nunito rounded-lg p-6">
      <h2 className="text-2xl font-josefin text-[#4c4c62] font-bold">
        Accounts Module
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 text-sm">
       <Fade left>
        <ul>
          <li>◆ Chart of accounts - main and sub accounts</li>
          <li>◆ Receipts (Premium, Commissions, Excess and general receipts)</li>
          <li>◆ Payments (direct payments, payments to insurers, sub - agents, suppliers, and general payments)</li>
          <li>◆ Premium receipts and payments allocation to specific debit notes</li>
          <li>◆ Receipts printing</li>
          <li>◆ Cheque printing</li>
        </ul>
        <ul>
          <li>◆ Payment voucher printing</li>
          <li>◆ Post dated cheques register</li>
          <li>◆ Premium remittance schedules</li>
          <li>◆ Claim credit notes</li>
          <li>◆ General invoices / fee notes</li>
          <li>◆ Petty cash management</li>
          <li>◆ Suppliers’ module</li>
          <li>◆ Various journal voucher transactions</li>
          <li>◆ Bank statement reconciliation</li>
          <li>◆ Insurance company statement reconciliation</li>
          <li>◆ Fund management</li>
        </ul>
        </Fade>
      </div>
    </div>
  </div>
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 p-4">
          <div className="bg-gray-100 font-nunito rounded-lg p-6 lg:m-16">
           
            <h2 className="text-2xl font-josefin text-[#4c4c62] font-bold">
            Claims Management
            </h2>
            <Fade right>
            <p>
              <ul>
              <li>◆ Claim types setup</li>
              <li>◆ Standard documents</li>
              <li>◆ Claim registration</li>
              <li>◆ Claim documentation</li>
              <li>◆ Claim memos with standard memo templates</li>
              <li>◆ Claim progress notes</li>
              <li>◆ Claims reports</li>
              </ul>
            </p>
            </Fade>
          </div>
        </div>

 
      </div>
      <div className="flex flex-wrap justify-center">
        
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-4">
          <div className="bg-gray-100 font-nunito rounded-lg p-6">
           
            <h2 className="text-2xl font-josefin text-[#4c4c62] font-bold">
            Payroll Module
            </h2>
            <Fade left>
            <p> <ul>
            <li>◆ Simplified payroll processing system.</li>
            <li>◆ Seamless integration for efficiency.</li>
            <li>◆ Automated calculations and deductions.</li>
            <li>◆ Centralized payroll management platform.</li>
            <li>◆ Easy access and compliance.</li>
          

              </ul> </p>
              </Fade>
          </div>
        </div>
        <div className="w-full  sm:w-1/2 md:w-1/3 lg:w-1/3 p-4">
          <div className="bg-gray-100 font-nunito rounded-lg p-6">
            
            <h2 className="text-2xl font-josefin text-[#4c4c62] font-bold">
            Internal Premium Finance
            </h2>
            <Fade bottom>
            <p className='text-base'> 
              <ul >
            <li>◆ Finance facility register with interest computation</li>
            <li>◆ Finance receipts</li>
            <li>◆ Integration with a client’s premium account</li>
            <li>◆ Integration with the accounting module</li>
            <li>◆ IPF Reports</li>
            
              </ul></p>
              </Fade>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-4">
          <div className="bg-gray-100 font-nunito rounded-lg p-6">
           
            <h2 className="text-2xl font-josefin text-[#4c4c62] font-bold">
            Front Office Module
            </h2>
            <Fade right>
            <p>
              <ul>
              <li>◆ Various templates e.g. gate pass, leave forms, etc</li>
            <li>◆ Incoming and outgoing mail registers</li>
            <li>◆ Printing of envelopes</li>
            <li>◆ Left messages (while you were away)</li>
            <li>◆ Meetings’ reminders</li>
            

              </ul>

            </p>
            </Fade>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
        <div className="w-full  sm:w-1/2 md:w-1/3 lg:w-1/2 p-4">
          <div className="bg-gray-100 font-nunito rounded-lg p-6 lg:m-12">
            
            <h2 className="text-2xl font-josefin text-[#4c4c62] font-bold">
            DMS – Document Management System
            </h2>
            <Fade left>
            <p> 
<ul>
<li>◆ Paperless solution for insurance document management.</li>
<li>◆ Integrated module for seamless record access.</li>
<li>◆ Efficient and user-friendly document scanning.</li>
<li>◆ Centralized platform for streamlined record retrieval.</li>
<li>◆ Saves time and eliminates physical filing.</li>
<li>◆ Quick and easy access to all records.</li>

</ul>
            </p>
            </Fade>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 p-4">
          <div className="bg-gray-100 font-nunito rounded-lg p-6">
            
            <h2 className="text-2xl font-josefin text-[#4c4c62] font-bold">
            Reporting
            </h2>
            <Fade right>
            <p> 
              <ul>
              <li>◆ Basic Listings: Clients, insurers, suppliers, sub-agents, and more.</li>
              <li>◆ Statement of Accounts: Clients, insurance companies, suppliers, fund accounts.</li>
              <li>◆ Aged Balances Summaries</li>
              <li>◆ Premium Production Reports</li>
              <li>◆ Commission Production Reports</li>
              <li>◆ Policy Renewals Reports</li>
              <li>◆ Claims Module Reports</li>
              <li>◆ Accounting Reports</li>
              <li>◆ Insurance Regulatory Authority (IRA) Reports</li>
              <li>◆ Management Summary</li>
              <li>◆ Payroll Reports</li>
              <li>◆ Audit Trail Report</li>
              
              </ul>
            </p>
            </Fade>
          </div>
        </div>
</div>
       </div>
      


<ScrollToTopButton/>
  <Footer/>

    </div>
  )
}

export default OurProduct
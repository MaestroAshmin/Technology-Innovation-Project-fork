import React, { useState, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';

function LogTest() {

//state management
  // const [testResult, setTestResult] = useState('negative');
  // const [testReason, setTestReason] = useState('none');
  // const [receivePDF, setReceivePDF] = useState('no');
  // const [sendToServices, setSendToServices] = useState('no');

  // const { auth } = useAuth(); 
  // const navigate = useNavigate(); 


  // const handleTestResultChange = (e) => {
  //   setTestResult(e.target.value);
  // };

  // const handleReceivePDFChange = (e) => {
  //   setReceivePDF(e.target.value);
  // };

  // const handleSendToServicesChange = (e) => {
  //   setSendToServices(e.target.value);
  // };
  // const handleTestReasonChange = (e) => {
  //   setTestReason(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  

  // const reasonOptions = [
  //   { value: 'none', label: 'None' },
  //   { value: 'unprotected_sex', label: 'Unprotected Sex' },
  //   { value: 'sharing_needles', label: 'Sharing Needles' },
  //   { value: 'blood_transfusions', label: 'Blood Transfusions' },
  //   { value: 'occupational_exposure', label: 'Occupational Exposure' },
  //   { value: 'needlestick_injury', label: 'Needlestick Injury' },
  //   { value: 'other', label: 'Other' },
  // ];

  // useEffect(() => {
  //   // Check if the user is not authenticated and navigate to the login page
  //   if (!auth) {
  //     navigate('/login'); 
  //   }
  // }, [auth, navigate]);

  //returns test logging form
  return (
    <></>
//     <div className="layout">
//       <div className="container">
//         <div className="form">
//           <h2>Log Test Results</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="testResult">Test Result</label>
//               <select
//                 id="testResult"
//                 name="testResult"
//                 value={testResult}
//                 onChange={handleTestResultChange}
//                 required
//                 className="form-input"
//               >
//                 <option value="positive">Positive</option>
//                 <option value="negative">Negative</option>
//               </select>
//             </div>
//             <div className="form-group">
//               <label htmlFor="reasonForTesting" className='form-field-optional'>Reason for Testing*</label>
//               <select
//                 id="reasonForTesting"
//                 name="reasonForTesting"
//                 value={testReason} 
//                 onChange={handleTestReasonChange} 
//                 className="form-input"
//               >
//                 {reasonOptions.map(option => (
//                   <option key={option.value} value={option.value}>{option.label}</option>
//                 ))}
//               </select>
//             </div>
//             <div className="form-group">
//               <label htmlFor="receivePDF" className='form-field-optional'>Would you like to download a
// certificate of your result?*</label>
//               <select
//                 id="receivePDF"
//                 name="receivePDF"
//                 value={receivePDF}
//                 onChange={handleReceivePDFChange}
//                 className="form-input"
//               >
//                 <option value="yes">Yes</option>
//                 <option value="no">No</option>
//               </select>
//             </div>
//             <div className="form-group">
//               <label htmlFor="sendToServices" className='form-field-optional'>Would you like us to get local 
// services to contact you?*</label>
//               <select
//                 id="sendToServices"
//                 name="sendToServices"
//                 value={sendToServices}
//                 onChange={handleSendToServicesChange}
//                 className="form-input"
//               >
//                 <option value="yes">Yes</option>
//                 <option value="no">No</option>
//               </select>
//             </div>
//             <p>*Fields labelled in italics are optional.</p>
//             <div className="form-button-group">
//               <button type="submit" className="login-button">
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
  );
}

export default LogTest;

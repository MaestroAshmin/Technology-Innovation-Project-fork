/*Test logging page
Justin Li 104138316
Last edited 14/09/2023*/
import React, { useState } from 'react';

function LogTest() {

//state management
  const [testResult, setTestResult] = useState('negative');
  const [reasonForTesting, setReasonForTesting] = useState('');
  const [receivePDF, setReceivePDF] = useState('no');
  const [sendToServices, setSendToServices] = useState('no');

  const handleTestResultChange = (e) => {
    setTestResult(e.target.value);
  };

  const handleReasonChange = (e) => {
    setReasonForTesting(e.target.value);
  };

  const handleReceivePDFChange = (e) => {
    setReceivePDF(e.target.value);
  };

  const handleSendToServicesChange = (e) => {
    setSendToServices(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //returns test logging form
  return (
    <div className="layout">
      <div className="container">
        <div className="form">
          <h2>Log Test Results</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="testResult">Test Result</label>
              <select
                id="testResult"
                name="testResult"
                value={testResult}
                onChange={handleTestResultChange}
                required
                className="form-input"
              >
                <option value="positive">Positive</option>
                <option value="negative">Negative</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="reasonForTesting" className='form-field-optional'>Reason for Testing*</label>
              <textarea
                id="reasonForTesting"
                name="reasonForTesting"
                value={reasonForTesting}
                onChange={handleReasonChange}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="receivePDF" className='form-field-optional'>Would you like to download a
certificate of your result?*</label>
              <select
                id="receivePDF"
                name="receivePDF"
                value={receivePDF}
                onChange={handleReceivePDFChange}
                className="form-input"
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="sendToServices" className='form-field-optional'>Would you like us to get local 
services to contact you?*</label>
              <select
                id="sendToServices"
                name="sendToServices"
                value={sendToServices}
                onChange={handleSendToServicesChange}
                className="form-input"
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <p>*Fields labelled in italics are optional.</p>
            <div className="form-button-group">
              <button type="submit" className="login-button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogTest;

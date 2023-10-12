import React from 'react';

const Modal = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 ${isOpen ? 'visible' : 'invisible'}`}>
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold">Success!</p>
            <button onClick={onClose} className="modal-close">
              <span className="text-3xl">&times;</span>
            </button>
          </div>
          <p>Your issue has been submitted successfully!</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;

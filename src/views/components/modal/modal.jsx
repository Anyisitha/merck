import PropTypes from "prop-types";
import { Fragment } from "react";
import {
  StyledContentModal,
  StyledIframe,
  StyledModalContent,
  StyledOverlay,
} from "./Modal.styles";

const Modal = ({ url, open, onClose }) => {
  return (
    <Fragment>
      {open && (
        <StyledModalContent
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <StyledOverlay></StyledOverlay>

          <div class="fixed inset-0 z-10 overflow-y-auto">
            <div class="flex min-h-full items-center justify-center p-0 text-center sm:items-center sm:p-0">
              <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-3xl transition-all sm:my-4 sm:w-[95%] sm:max-w-[950px]">
                <StyledContentModal>
                  <StyledIframe
                    src={url}
                    frameborder="0"
                    title="blog"
                    allowfullscreen
                  ></StyledIframe>
                </StyledContentModal>
                <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    onClick={onClose}
                    type="button"
                    class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </StyledModalContent>
      )}
    </Fragment>
  );
};

Modal.propTypes = {
  url: PropTypes.string,
};

export default Modal;

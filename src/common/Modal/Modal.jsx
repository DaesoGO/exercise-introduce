import React, { useEffect } from "react";
import * as M from "./Modal.style";

import Portal from "./Portal"

const Modal = ({
  name,
  onClose,
  maskCloseable,
  visible,
  children,
}) => {
  // 모달을 생성 했을 때 배경의 스크롤을 body태그의 css를 변경해서 못 움직이도록 해준다,
  // overflow-y를 그대로 스크롤로 해놓고 top을 변경했기 때문에, 모달이 생겼을 때도 스크롤이 없어지지 않는다
  useEffect(() => {
    document.body.style.cssText = `
        position:fixed;
        top:-${window.scrollY}px`
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = ``;
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    };
  }, []);

  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  return (
    <Portal elementId="modal-root">
      <M.ModalOverlay visible={visible} />
      <M.ModalWrapper
        visible={visible}
        className={name}
        tabIndex="-1"
        onClick={maskCloseable ? onMaskClick : null}
      >
        <M.ModalInner tabIndex="0" className="modal-inner">
          {children}
        </M.ModalInner>
      </M.ModalWrapper>
    </Portal>
  );
};

export default Modal;

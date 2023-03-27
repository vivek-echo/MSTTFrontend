/**
 * Created By  : Sambit Kumar Dalai
 * Created On  : 15-05-2022
 * Description : Custom alert functions.
 **/

import Swal from "sweetalert2";

export class AlertHelper {
  // ====== client side alert
  viewAlert(...params: any) {
    const [iconType, title, message] = params;
    return Swal.fire({
      icon: iconType,
      // title: title,
      text: message,
    });
  }

  // ======== server side
  viewAlertHtml(...params: any) {
    const [iconType, title, html] = params;
    return Swal.fire({
      icon: iconType,
      // title: title,
      html: html,
    });
  }
  deleteAlert(...params: any) {
    const [title, text, icon, confirmButtonText] = params;
    return Swal.fire({
      title: title || "Are you sure?",
      text: text,
      icon: icon || "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: confirmButtonText || "Yes, delete it!",
    });
  }
  successAlert(...params: any) {
    const [title, message, iconType] = params;
    return Swal.fire("", message, iconType);
  }
  submitAlert(...params: any) {
    const [title, iconType, confirmButtonText, cancelButtonText] = params;
    return Swal.fire({
      title: title || "Do you want to submit?",
      icon: iconType || "question",
      showCancelButton: true,
      confirmButtonText: confirmButtonText || "Yes",
      cancelButtonText: cancelButtonText || "No",
    });
  }
  confirmAlert(...params: any) {
    const [title, text, icon, confirmButtonText] = params;
    return Swal.fire({
      title: title || "Are you sure?",
      text: text,
      icon: icon || "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: confirmButtonText || "Yes",
    });
  }
  updateAlert(...params: any) {
    const [title, text, confirmButtonText, cancelButtonText] = params;
    return Swal.fire({
      title: title || "Do you want to update?",
      icon: text || "question",
      showCancelButton: true,
      confirmButtonText: confirmButtonText || "Yes, update it!",
      cancelButtonText: cancelButtonText || "No, keep it",
    });
  }
  pageChangeWarningAlert() {
    return Swal.fire({
      title: "Do you want to proceed?",
      text: "Please save your changes.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Procced",
      cancelButtonText: "Cancel",
    });
  }
}
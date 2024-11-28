import React from "react";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type NotificationProps = {
    type: string;
    text: string;
}

const Notification: React.FC<NotificationProps> = ({type, text}) => {

    const notify = () => {
        switch (type) {
            case 'info':
                toast.info(text);
                break;
            case 'success':
                toast.success('Success message');
                break;
            case 'warning':
                toast.warning('Warning message' );
                break;
            case 'error':
                toast.error("Erreur de connexion", {theme: "colored",});
                break;
        }
    };

    return (
        <>
            {notify()}
        <ToastContainer />
        </>
);

}
//
// function Notification(type: string, text: string) {
//
//     const notify = () => {
//         switch (type) {
//         case 'info':
//             toast.info(text);
//             break;
//         case 'success':
//             toast.success('Success message');
//             break;
//         case 'warning':
//             toast.warning('Warning message' );
//             break;
//         case 'error':
//             toast.error("Erreur de connexion", {theme: "colored",});
//             break;
//     }
//     };
//
//     return (
//         <>
//             {notify}
//             <ToastContainer/>
//         </>
//     );
// }

export default Notification;
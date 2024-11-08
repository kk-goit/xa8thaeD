import yourEnergy from './api/your-energy-api.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.footer-form')

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = form.elements.email.value;
    const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if (emailPattern.test(email)) {
        try {
            const response = await yourEnergy.orderSubscription(email);
            iziToast.success({
                title: 'Success',
                message: 'Subscription successful!',
            });
        } catch (error) {
            iziToast.error({
                title: 'Error',
                message: 'Subscription failed: ' + error,
            });
        }
    } else {
        iziToast.warning({
            title: 'Warning',
            message: 'Please enter a valid email address.',
        });
    }
});
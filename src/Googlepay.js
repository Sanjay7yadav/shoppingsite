import Recat from 'react';
import './Checkout.css';
import GooglePayButton from '@google-pay/button-react';

const Googlepay = ()=>{
    return (
        <>
          <div className='gpay'>
          
            <GooglePayButton
                    environment="TEST"
                    paymentRequest={{
                    apiVersion: 2,
                    apiVersionMinor: 0,
                    allowedPaymentMethods: [
                        {
                            type: 'CARD',
                            parameters: {
                            allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                            allowedCardNetworks: ['MASTERCARD', 'VISA'],
                        },
                    tokenizationSpecification: {
                    type: 'PAYMENT_GATEWAY',
                    parameters: {
                    gateway: 'example',
                    gatewayMerchantId: 'exampleGatewayMerchantId',
                    },
                },
            },
        ],
    merchantInfo: {
      merchantId: '12345678901234567890',
      merchantName: 'Total',
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '700',
      currencyCode: 'INR',
      countryCode: 'US',
    },
    shippingAddressRequired:true,
    callbackIntents:['PAYMENT_AUTHORIZATION'],
  }}
  onLoadPaymentData={paymentRequest => {
    console.log('Success', paymentRequest);
  }}
  onPaymentAuthorized={paymentData=>{
      console.log("payment Authorized success",paymentData)
      return{transactionState: 'SUCCESS'}
  }}
  existingPaymentMethodRequired='false'
  buttonColor='black'
  buttonType='Buy'
    />
    </div>
    

        </>
    )
}
export default Googlepay;
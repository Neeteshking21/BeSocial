/**
* INTERFACE :: Used For Connect Different Servers Without Breaking The Rule
* Of Open-Closed Principle Of SOLID Principles.
* @appeal Please, Write Comments On Every Major Changes Or Feature.
*
*/

interface BeSocialConnections
{
    /**
     * FUNCTION :: Used For Connect Different Servers Without Breaking The Rule
     * Of Open-Closed Principle Of SOLID Principles.
     * 
     * @params {configs} of type Object
     * @return {any} A Response Of Connection Initiate Request
     */
     initiateConnection: () => any

     /**
      * FUNCTION :: Used For Get Connections Of Servers Without Breaking The Rule
      * Of Open-Closed Principle Of SOLID Principles.
      * 
      * @return {any} A Response Of Connection Abort Request
      */
      getConnectionInfos: () => any


    /**
     * FUNCTION :: Used For Abort Connections Of Servers Without Breaking The Rule
     * Of Open-Closed Principle Of SOLID Principles.
     * 
     * @params {configs} of type Object
     * @return {any} A Response Of Connection Abort Request
     */
     abortConnection: () => any

}
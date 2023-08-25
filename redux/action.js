export const updateServiceType = (serviceName) => {

    return {
        type: 'UPDATE_SERVICE_TYPE_ONE',
        payload: serviceName,
    };

};

export const cardServiceType = (serviceName, servicePrice) => {

    return {
        type: 'UPDATE_CARD_SERVICE_TYPE',
        payload: serviceName
    };

};

export const cardServicePrice = (servicePrice) => {

    return {
        type: 'UPDATE_CARD_SERVICE_PRICE',
        payload: servicePrice
    };

};

export const updateServiceVisibility = (serviceVisibility) => {

    return {
        type: 'UPDATE_SERVICE_TYPE_VISIBILITY',
        payload: serviceVisibility,
    };
    
};
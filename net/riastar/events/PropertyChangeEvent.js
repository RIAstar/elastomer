var PropertyChangeEvent = function (source, property, newValue, oldValue) {
    this.source = source;
    this.property = property;
    this.newValue = newValue;
    this.oldValue = oldValue;
};

PropertyChangeEvent.prototype = {
    PROPERTY_CHANGE: 'propertyChange'
};

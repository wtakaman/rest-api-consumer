'use strict';
/**
 * Contact Controller for input and RESTApi integration
 */
braviApp.controller('ContactController', function ContactController($scope, $http, $cookies, $q, $route, contactData){

    /**
     * Default page initialization and contact listing
     */
    $scope.initHome = function() {
        $scope.listContacts();
    }


    /**
     * Form to handle user inputs
     */
    $scope.contactForm = {};

    /**
     * Sets the inputs to contact edit
     * @param contact
     */
    $scope.editContact = function(contact){
        $scope.contactForm.email = contact.email;
        $scope.contactForm.phone = contact.phone;
        $scope.contactForm.id = contact.id;
    };

    /**
     * Delete contact from database
     * @param contact
     */
    $scope.deleteContact = function(contact){
        contactData.delete(contact).then(function(retorno) {
            // retrive all contacts after delete
            $scope.listContacts();
        }, function error(retorno) {
            $scope.contactForm.showError = true;
            $scope.contactForm.message = retorno.error;
        });
    };

    $scope.saveContact = function(contactForm) {
            var contact = {
                "id": contactForm.id,
                "email": contactForm.email,
                "phone": contactForm.phone
            }

            if (contact.id && parseInt(contact.id) > 0) {
                contactData.update(contact).then(function(retorno){
                    // retrive all contacts after update
                    $scope.listContacts();
                    $scope.contactForm = {
                        showSuccess: true,
                        message: retorno.message
                    };
                }, function error(retorno) {
                    $scope.contactForm.showError = true;
                    $scope.contactForm.message = retorno.error;
                });
            } else {
                contactData.save(contact).then(function(retorno){
                    // retrive contacts after saving
                    $scope.listContacts();
                    $scope.contactForm = {
                        showSuccess: true,
                        message: retorno.message
                    };
                }, function error(retorno) {
                    $scope.contactForm.showError = true;
                    $scope.contactForm.message = retorno.error;
                });
            }

    };

    /**
     * Clean up form
     * @param contact
     */
    $scope.cancelEdit = function(contact){
        $scope.contactForm = {};
    };

    /**
     * Method to retrive all contacts
     */
    $scope.listContacts = function(){
        contactData.list(null).then(function(retorno){
            $scope.contacts = retorno.contacts;
        }, function error(retorno) {
            $scope.contactForm.showError = true;
            $scope.contactForm.message = retorno.error;
        });
    };

});
var email = prompt("Enter your email address:");
    // Check if the email contains @
    if (email.includes('@')) {
    // Split the email into two parts: username and domain
        var parts = email.split('@');
        //console.log(parts);

        // Check if there is at least one character before @ and after @
        if (parts[0].length > 0 && parts[1].length > 0) {
            // Check if there is a dot after @ and at least one character after the dot
            var domainParts = parts[1].split('.');
            //console.log(domainParts);
            if (domainParts[0].length > 1 && domainParts[1].length > 0) {
                alert("Email is valid");
            } else {
                alert("Invalid email: Missing dot or characters after dot in the domain");
            }
        } else {
            alert("Invalid email: Missing characters before or after @");
        }
    } else {
        alert("Invalid email: Missing @ symbol");
    }

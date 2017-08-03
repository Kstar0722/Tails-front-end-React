export function validationFields(fields, values){
  let errors = {};
  console.log('sdsd')
  if (Array.isArray(fields)){
    fields.map(field => {
      if (Array.isArray(field.rules)){
        field.rules.map(rule => {
          switch (rule){
            case 'required':
              if (!values[field.name]){
                errors[field.name] = 'Required'
              }
              break;
            case 'email':
              if(values[field.name]){
                let email = values[field.name];
                var atpos = email.indexOf("@");
                var dotpos = email.lastIndexOf(".");
                if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
                  errors[field.name] = 'Not a valid e-mail address'
                }
              }
              break;
            case 'numeric':
              if(values[field.name]){
                if (!(!isNaN(parseFloat(values[field.name])) && isFinite(values[field.name]))) {
                  errors[field.name] = 'Not a valid numeric'
                }
              }
              break;  
            case 'integer':
              if(values[field.name]){
                let n = Math.floor(Number(values[field.name]));
                if (!(String(n) === values[field.name] && n >= 0)) {
                  errors[field.name] = 'Not a valid integer'
                }
              }
              break;  
          }
        })
      } else {
        switch (field.rules){
          case 'required':
            if (!values[field.name]){
              errors[field.name] = 'Required'
            }
            break;
          case 'email':
              if(values[field.name]){
                let email = values[field.name];
                var atpos = email.indexOf("@");
                var dotpos = email.lastIndexOf(".");
                if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
                  errors[field.name] = 'Not a valid e-mail address'
                }
              }
              break;
            case 'numeric':
              if(values[field.name]){
                if (!(!isNaN(parseFloat(values[field.name])) && isFinite(values[field.name]))) {
                  console.log('sdsd')
                  errors[field.name] = 'Not a valid numeric'
                }
              }
              break;
            case 'integer':
              if(values[field.name]){
                let n = Math.floor(Number(values[field.name]));
                if (!(String(n) === values[field.name] && n >= 0)) {
                  errors[field.name] = 'Not a valid integer'
                }
              }
              break;
        }
      }
    });
    return errors;
  } else {
    return errors;
  }
}
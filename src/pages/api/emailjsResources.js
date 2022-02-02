async function emailResources(req, res){
    const resources = {
        emailjsUser: process.env.EMAILJS_API_USER,  
        emaisjsTemplate: process.env.EMAILJS_API_TEMPLATE,  
        emailjsSevice: process.env.EMAILJS_API_SERVICE, 
    }
    console.log(resources);
    res.json({
        resources
    })
}

export default emailResources;
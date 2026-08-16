const prompt = require("prompt-sync")();


let customers = [];

//=========== Object ============
let id;
let name; 
let phoneNo;
let mobileModel;
let mobileProblem;
let charges;
let status;
notified: false;
//let ready;
//let found;





//=========== Add Customer ============
function addCustomer(){

    console.log("=========== Add Customer ===========") 
    let id = Number(prompt("Enter your id :"));
    let name = prompt("Enter your Name :");
    let phoneNo = prompt("Enter your Phone Number :");
    let mobileModel = prompt("Enter your Mobile Model :");
    let mobileProblem = prompt("Enter your Mobile Problem :");
    let charges = prompt("Enter your Charges :");
    let status = prompt("Enter your Status :");
    customers.push({
        id: id,
        name: name,
        phoneNo: phoneNo,
        mobileModel: mobileModel,
        mobileProblem: mobileProblem,
        charges: charges,
        status: status, 
        notified: false,     
    })
    console.log("Customer Added Successfully !");  
}








//============ Show Customer =============
function showCustomer(){

    if(customers.length === 0){
        console.log("No Customer Found !");
        return;
    }
    console.log("=============== Show Customer ================");
    for(let i = 0; i < customers.length; i++ ){

        console.log("Customer #" + (i + 1));

        console.log("Customer ID :" + customers[i].id);
        console.log("Customer Name :" + customers[i].name);
        console.log("Customer Phone Number :" + customers[i].phoneNo);
        console.log("Customer Mobile Model :" + customers[i].mobileModel);
        console.log("Customer Mobile Problem :" + customers[i].mobileProblem);
        console.log("Charges :" + customers[i].charges);
        console.log("Status :" + customers[i].status);
        console.log("=============================");
    }
}







//============ Update Customer ==============
function updateCustomer(){

    if(customers.length === 0){
        console.log("No Customer Found !");
        return;
    }
    let id = Number(prompt("Enter ID to update :"));
    let found = false;

   for(let i = 0; i < customers.length; i++ ){
    if(customers[i].id === id){
        found = true;

    console.log("================ Update Customer ==============");
    customers[i].id = Number(prompt("Enter New Id :"));
    customers[i].name = prompt("Enter New Name :");
    customers[i].phoneNo = Number(prompt("Enter New Phone No :"));
    customers[i].mobileModel = prompt("Enter Mobile Model :");
    customers[i].mobileProblem = prompt("Enter New Mobile Problem :");
    customers[i].charges = prompt("Enter New Charges :");
    customers[i].status = prompt("New Status :");
    console.log("Customer Update Successfully !");
    break;
   }
}
   if(! found){
    console.log("Customer Record Not Found !");
   }
}







//============ Delete Customer =============
function deleateCustomer(){

    if(customers.length === 0){
        consaole.log("Customer Not Found !");
    }
    console.log("================= Delete Customer =================");
    let id = Number(prompt("Enter Id to Delete :"));
    let found = false;
    for(let i = 0; i < customers.length; i++){
    if(customers[i].id === id){
        found = true;
        customers.splice(i,1);
        found = true;
        console.log("Customer Record Deleated Successfully !");
        break;
    }
}
if(! found){
    console.log("Customer Record Not Found !");
}
}







//================ Notification Funcation ===============

function notificationMenu(){
let choice;
    do{
    console.log("=============== Notification ===============");
    console.log("                    MENU                  ");
    console.log("1 : One Customer Notification \n");
    console.log("2 : All Customer Status Show \n");
    console.log("3 : Exit / Back to Main Menu \n");

    let choice = prompt("Enter your Choice :");

    switch (choice){
        case "1":
            oneCustomerNotification();
            break;
            case "2":
               allCustomersStatusShow();
                break;
                case "3":
                console.log("Thank You !");
                return;
                default :
                console.log("Invalid Choice !");
    }
}while(choice !== "3");
}







 // =============== One Customer Notification ================
function oneCustomerNotification(){

 console.log("================ One Customer Notification ================");
 console.log("One Customer Notification search to ID :");

 let id =  Number(prompt("Enter Your Id :"));
 let found = false;

 for(let i = 0; i < customers.length; i++){
    if(customers[i].id === id){
        found = true;

        console.log("==========================");
        console.log("Customer Id :" , customers[i].id);
        console.log("Customer Name :" , customers[i].name);
        console.log("Status :" , customers[i].status);
        console.log("Notified :" , customers[i].notified);
    
    if(customers[i].status === "ready" && customers[i].notified === false){
        console.log("          NOTIFICATION          ");
        console.log("Customer Id :" + customers[i].id)
        console.log("Customer Name :" + customers[i].name);
        console.log("Your Mobile is Ready !");
        console.log("Please Pic Up your Mobile !");
        customers[i].notified = true;
    }
    else if(customers[i].status === "ready" && customers[i].notified === true){
       // console.log("Customer Id :" + customers[i].id);
        //console.log("Customer Name :" + customers[i].name);
        console.log("Notification Already Shown !");
    }
    else{
        console.log("Your Mobile is not Ready !");
    }
    break;
    }
}
 if(found === false){
    console.log("Custoer Not Found !");
 }
 }






// =============== All Customers Status Show ================
function allCustomersStatusShow(){

console.log("============= All Customers Status Show =============");
if(customers.length === 0){
    console.log("Customer Not Found !");
    return;
}
for(let i = 0; i < customers.length; i ++){

    console.log("Customer #" + (i + 1));

    console.log("Id :", customers[i].id);
    console.log("Name :", customers[i].name);
    console.log("Phone Number :", customers[i].phoneNo);
    console.log("Mobile Model :", customers[i].mobileModel);
    console.log("Mobile Problem :", customers[i].mobileProblem);
    console.log("Charges :", customers[i].charges);
    console.log("Status :", customers[i].status);
    console.log("==================================");
}
 }






function exit(){
    console.log("Thank You so much !");
    console.log("Visit Again !")
    }






//=============== Menu ===============
function menu(){
    let choice;
    do{
        console.log("========= Mobile Repair Shop Management System ========");
        console.log("               MENU              ");
        console.log(" 1 : Add Customer \n");
        console.log(" 2 : Show Customer \n");
        console.log(" 3 : Update Customer \n");
        console.log(" 4 : Delete Customer \n");
        console.log(" 5 : Notification \n");
        console.log(" 6 : Exit \n"); 

        let choice = prompt("Enter your choice :");

        switch (choice){
            case "1":
                addCustomer();
                break;
                case "2":
                    showCustomer();
                    break;
                    case "3":
                        updateCustomer();
                        break;
                        case "4":
                            deleateCustomer();
                            break;
                            case "5":
                                notificationMenu();
                                break;
                                case "6":
                                     exit();
                                     break;
                                     default:
                                     console.log("Invalid Choice !");
        }
   }while(choice !== "6");
}
menu();

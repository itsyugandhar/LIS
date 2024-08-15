var nameError=document.getElementById("nameError");
var isbnError=document.getElementById("isbnError");
var authorError=document.getElementById("authorError");
var branchError=document.getElementById("branchError");
var submitError = document.getElementById("submitError");
 function validateName()	
	{

	    var name = document.getElementById("name").value;
	     
	     if(name.length==0)
	     {
	    		 nameError.innerHTML='*Name is required';
	   		 nameError.style.color="black";
	   		 return false;
	     }
	     if(!name.match(/^[A-Za-z\s]*$/))
	     {
		 	nameError.innerHTML = "write valid name";
			nameError.style.color="black";
		 	return false;    
	     }
	      		 nameError.innerHTML ='<i class="fas fa-check-circle text-success "></i>';
			//nameError.style.color="green";
			return true;
	}
        function validateAuthor()	
	{

	    var name = document.getElementById("author").value;
	     
	     if(name.length==0)
	     {
	    		authorError.innerHTML='*name is required';
	   		authorError.style.color="black";
	   		 return false;
	     }
	     if(!name.match(/^[A-Za-z\s]*$/))
	     {
		 	authorError.innerHTML = "write valid name";
			authorError.style.color="black";
		 	return false;    
	     }
	      		 authorError.innerHTML ='<i class="fas fa-check-circle text-success "></i>';
			//nameError.style.color="green";
			return true;
	}
       function validateISBN()	
	{

	    var number = document.getElementById("isbn").value;
	     
	     if(number.length==0)
	     {
	    		 isbnError.innerHTML="*isbn required";
	   		isbnError.style.color="black";
	   		 return false;
	     }
	     if(!number.match(/^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/))
	     {
		 	isbnError.innerHTML = "enter valid isbn";
			isbnError.style.color="black";
		 	return false;    
	     }
	      		isbnError.innerHTML ='<i class="fas fa-check-circle text-success "></i>';
			//nameError.style.color="green";
			return true;
	}
        function validateBranch()	
	{

	    var name = document.getElementById("branch").value;
	     
	     if(name.length==0)
	     {
	    		branchError.innerHTML='*Branch is required';
	   		branchError.style.color="black";
	   		 return false;
	     }
	     if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/))
	     {
		 	branchError.innerHTML = "write full branchname";
			branchError.style.color="black";
		 	return false;    
	     }
	      		 branchError.innerHTML ='<i class="fas fa-check-circle text-success "></i>';
			//nameError.style.color="green";
			return true;
	}
  function validateForm()
	{
    	 if(!validateName() || !validateAuthor()|| !validateBranch()||!validateISBN())
	  {
		submitError.style.display="block";
		submitError.innerHTML="please fix error to submit";
		submitError.style.color="red";

		setTimeout(function(){submitError.style.display="none";},3000);
		return false;
	   }
}

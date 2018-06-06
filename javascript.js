var foo=function bar()
  {
    var foo="baz";
    console.log(foo,'value of foo in bar')
     
     function baz(foo)
     {
       foo='bar';
       console.log(foo,'value of foo in baz');
     }
     baz();
  };
  console.log(foo);
  console.log(baz);
  foo();
  bar();

 // Compilation phase

 var foo = function bar() // it will assign function bar() to variable foo.
 {
   var foo; // var foo is declared
   console.log(foo, 'value if foo in bar')  //skip

   funtion baz(foo){  // consider it as var foo;

    foo='bar' 
    console.log(foo,'value of foo in baz');
   }
   baz();
 };
 console.log(foo);
 console.log(baz);
 foo();
 bar();


//Execution Phase

//it will come ot line 32 to execure

print function bar() 

console.log(baz); // prints reference error because baz is not in global scope;

foo(); // function foo is call in line 34 so it will go in to function bar()

baz // print value of foo in bar as baz

//goes inside function baz 

bar // print value of foo as bar

//comes to line 35 and calls funtion bar(); and throughs reference error


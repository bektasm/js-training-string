/**
* Please ignore (or do not touch) all functions below in the code!
* - check()
* - isEqual()
*
* The tests are failing marked with red
* The successsful tests are marked with green (PASSED)
* Blue (VALUE IS CHANGED) means you've changed values which is not allowed!
*/

'Test Cases';
    {
      isEqual(true, new String("This is a string") instanceof String);
    };
    {
      isEqual(typeof "This is a string", "string");
    };
    {
      isEqual(',,,', new Array(4).toString());
    };
    {
      var c = "Hi class!" + " Go for gold, " + "Yayyy!";
      
      isEqual("Hi class! Go for gold, Yayyy!", c);
    };
    {
      var c = "{IT Club}"; // Do not touch this!
      var a = "KZO"; // Do not touch this!
      var b = "(Switzerland)" // Do not touch this!
      var processed = c + " [" + a + "] " + b;
      
      isEqual("{IT Club} [KZO] (Switzerland)", processed);
    };
    {
      var c = new String("Hi class!");
      var processed = c.concat(" ").concat("Whats up?")

      isEqual('Hi class! Whats up?', processed);
    };
    {
      var c = new String("it club");
      var processed = c.replace(" ", "");

      isEqual('itclub', processed);
    };    
    {
      var c = 'it club KZO';
      var processed = c.replace("club KZO", "KZO club");

      isEqual('it KZO club', processed);
    };
    {
      var c = 'it,club,kzo,switzerland';
      var processed = c.replace(/,/g, "&&");

      isEqual('it&&club&&kzo&&switzerland', processed);
    };
    {
      var c = 'kzo';
      var processed = c.toUpperCase();

      isEqual('KZO', processed);
    };
    {
      var c = 'Cihad, Ferdi, Mesut';
      var processed = c.substr(7, 5);

      isEqual('Ferdi', processed);
    };
    {
      var c = 'Cihad, Ferdi, Mesut';

      isEqual(true, c.endsWith('Mesut'));
    };
    {
      var c = '12'; // do not touch this!
      var a = '13'; // do not touch this!
      var processed = Number(c) + Number(a);

      isEqual('25', processed);
    };
    {
      var c = '12'; // do not touch this!
      var b = '13'; // do not touch this!
      var processed = Number(c) + Number(b);

      isEqual('25', processed);
    };
    {
      var c = 'it club, KZO, switzerland'; // do not touch this!
      var processed = c.toLowerCase().search("kzo");

      isEqual(9, processed);
    };
    {
      var c = new String("KZO"); // do not touch this!
      var processed = c.toLowerCase().repeat(4);

      isEqual('kzokzokzokzo', processed);
    };
    {
      var c = new String(" KZO, Switzerland    "); // do not touch this!
      var processed = c.trim();

      isEqual(16, processed.length);
    };
    {
      var c = "KZO"; // do not touch this!
      var processed = c.concat(", Switzerland ", "itclub");

      isEqual("KZO, Switzerland itclub", processed);
    };
    {
      var c = ""; // do not touch this!
      var processed = c.concat(String.fromCharCode(72,69,76,76,79))
                       .concat(String.fromCharCode(32))
                       .concat(String.fromCharCode(65,66,67));

      isEqual("HELLO ABC", processed);
    };
    {
      var c = "1.50 Fr"; // do not touch this!
      var processed = c.padStart(8, "0");

      isEqual("01.50 Fr", processed);
    };
    {
      var c = "50,100,200"; // do not touch this!
      var processed = c.split(",")[1];

      isEqual("100", processed);
    };
    {
      var c = "50,100,200"; // do not touch this!
      var processed = c.replace(/0/g, "o")

      isEqual("5o,1oo,2oo", processed);
    };



// Now report everything!
report();

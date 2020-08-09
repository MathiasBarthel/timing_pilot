// Find a tutorial and the list of availalbe elements at:
// https://www.pcibex.net/documentation/

PennController.ResetPrefix(null); // Shorten command names (keep this line here)

Sequence( "welcome" , randomize("experiment") , SendResults() , "final" );

newTrial("welcome",
newText("<p>Willkommen bei diesem kleinen Experiment! </p><p> Du wirst hier &uuml;ber vier kurze Telefonate zwischen zwei Freunden jeweils eine Einsch&auml;tzung abgeben. Den Anfang der Telefonate wirst du jeweils lesen, das Ende wirst du jeweils h&ouml;ren.<br><br>Stelle also bitte sicher, dass der <b>Sound an deinem Comuter angestellt</b> ist und du etwas h&ouml;ren kannst!</p>")
.print(),
newText("<p>In allen vier Telefonaten bittet der Anrufer (Person B) den Angerufenen (Person A) um einen Gefallen.<br><br>Nachdem du das Ende eines Telefonats geh&ouml;rt hast, kannst du jeweils auf einer Skala von 1 bis 7 bewerten, wie bereit Person B ist, Person A den Gefallen zu tun.</p>")
.print(),
newText("<p>Das ganze dauert keine drei Minuten. Wenn dein Sound an ist, kann es losgehen.</p>")
.print(),
newText("<br><br>")
.print(),
newButton("OK, ich hab den Sound angestellt. Los geht's!")
.print()
.wait()
);

    Template( variable => 
      newTrial("experiment",
        newTimer(500)
            .start()
            .wait()
        ,
        newText("(Telefon klingelt...)<br><br>")
            .size(400, 40)
            .italic()
            .print()
        ,
        newText("A: Hallo.<br><br>")
            .print()
        ,
        newText(variable.S2).right().print(), newText("<br>").right().print()
        ,
        newText(variable.S3).print(), newText("<br>").print()
        ,
        newText(variable.S4).right().print(), newText("<br>").right().print()
        ,
        newText(variable.S5).print(), newText("<br>").print()
        ,
        newText(variable.S6).right().print(), newText("<br>").right().print()
        ,
        newText(variable.S7).print(), newText("<br>").print()
        ,
        newText(variable.S8).right().print(), newText("<br>").right().print()
        ,
        newText("A: Aha.<br><br>").print()
        ,
        newText("B: ...?<br><br>").right().print()
        ,
        newText("A: ...<br><br>").print()
        ,
        newButton("Play")
        .print()
        .wait()
        ,
        clear()
        ,
        newAudio("Question", variable.AudioFile)
            .play()
            .wait()
        ,
        newTimer(500)
        .start()
        .wait()
        ,
        newText(variable.Question)
        .log()
        .print()
        ,
        newText("<br><br>")
        .print()
        ,
        newScale("rating", 7)
        .size(250, 40)
        .before( newText("left", "nicht sehr &emsp;").italic())
        .after( newText("right", "&emsp; sehr").italic())
        .keys()
        .labelsPosition("bottom")
        //.button()
        .print()
        .log()
        .wait()
        ,
        newText("<br><br>")
        .print()
        ,
        newButton("Weiter")
        .print()
        .wait()
        ,
        clear()
        ,
        newTimer(500)
            .start()
            .wait()
      )
      .log( "Item"   , variable.Item   )
      .log( "Gap" , variable.Gap )
      .log("Nativeness", variable.Nativeness)
      .log( "Group"  , variable.Group  )
    );
    
    newTrial("final",
    newText("Vielen Dank, dass du teilgenommen hast! Du kannst das Fenster in deinem Browser jetzt schlie&szlig;en.")
    .print()
    ,
    newButton("void")
    .wait()
    )
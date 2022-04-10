import React from "react";

const Igrica = ({
  brojPokusaja,
  zamisljeniBroj,
  promijeniStanje,
  feedback,
}) => {
  function provjeri(e) {
    e.preventDefault();
    let uneseniBroj = e.target.childNodes[0].value;
    e.target.childNodes[0].value = "";
    if (uneseniBroj < zamisljeniBroj) {
      //zam broj je veći
      promijeniStanje("veći");
    } else if (uneseniBroj > zamisljeniBroj) {
      //zam broj je manji
      promijeniStanje("manji");
    } else {
      promijeniStanje("pogodak");
    }
  }

  return (
    <div id="input" className="formDiv input-group-lg fs-1">
      <form className="form form-control" onSubmit={provjeri}>
        <input
          className="input form-control input-group-lg fs-1 "
          type='number'
          id='broj'
          placeholder='Guess the number 0-100'></input>
      </form>
      <div id='pokusaji' className="tries form-control input-group-lg fs-1"><strong>Number of tries:</strong> {brojPokusaja}</div>
      <div id='feedback'>{feedback}</div>
    </div>
  );
};

export default Igrica;

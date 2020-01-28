let log = console.log;
log(Math.PI.toPrecision(3))

let text= `<html><body bgcolor = linen><p> This is <b> bold> </b>  </p></body><p>`;

log(text);

let tags = /[^<>]+|<(\/?)([A-Za-z]+)([^<>]*)>/g

let a, i;
a = text.match(tags);

for ( i = 0; i< a.length; ++i) {
  log("TAG: ", a[i]);
}

log(String.fromCharCode(65));

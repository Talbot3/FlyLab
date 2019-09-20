
Path
  = Date Separator Camera Separator

Date
  = Integer Herizon Integer Herizon Integer

Day
  = day: Integer Under Integer Under Integer

Separator
  = [\/]

Herizon
  = [-]

Under 
  = [_]

Integer "integer"
  = _ [0-9]+ { return parseInt(text(), 10); }
  
File
  = "1_wrong_time" Integer ".mp4"

Camera
  = "camera"


_ "whitespace"
  = [ \t\n\r]*
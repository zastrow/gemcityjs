$ ->
  $pastMeetings = $(".past article")

  if $pastMeetings.length % 2 == 1
    $($pastMeetings[$pastMeetings.length - 1]).addClass("ending")
  else
    $($pastMeetings[$pastMeetings.length - 1]).addClass("ending")
    $($pastMeetings[$pastMeetings.length - 2]).addClass("ending")

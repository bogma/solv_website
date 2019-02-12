$relay_fst = Get-ChildItem ..\data\championships -Recurse -Filter *.yaml | Select-String -Pattern '- name: \[(.*), .*\]' | %{ $_.Matches.Groups[1].Value }
$relay_snd = Get-ChildItem ..\data\championships -Recurse -Filter *.yaml | Select-String -Pattern '- name: \[.*, (.*)\]' | %{ $_.Matches.Groups[1].Value }
$single = Get-ChildItem ..\data\championships -Recurse -Filter *.yaml | Select-String -Pattern '- name: ([^\[].*)' | %{ $_.Matches.Groups[1].Value }


$existing = Get-ChildItem ..\data\club_members.yaml | Select-String -Pattern '    - (.*)' | %{ $_.Matches.Groups[1].Value }
$champs = $relay_fst + $relay_snd + $single | Select-Object -Unique | Sort-Object

$champs | Where-Object {!($existing -contains $_)} | Sort-Object > missing_members.txt

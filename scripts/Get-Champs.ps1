$relay_fst = Get-ChildItem .\data\championships -Recurse -Filter *.yaml | Select-String -Pattern '- name: \[(.*), .*\]' | %{ $_.Matches.Groups[1].Value }
$relay_snd = Get-ChildItem .\data\championships -Recurse -Filter *.yaml | Select-String -Pattern '- name: \[.*, (.*)\]' | %{ $_.Matches.Groups[1].Value }
$single = Get-ChildItem .\data\championships -Recurse -Filter *.yaml | Select-String -Pattern '- name: ([^\[].*)' | %{ $_.Matches.Groups[1].Value }


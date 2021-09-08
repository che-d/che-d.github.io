<svg version="1.1" baseProfile="tiny" id="svg-root"
  width="100%" height="100%" viewBox="0 0 480 201"
  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
 <?

$numFrames = 218;
$FPS = 12;

for($i=0;$i<=$numFrames-1;$i++)
{
?>
<image id="frame<?=$i?>" width="480" height="201" xlink:href="data:image/jpeg;base64,<?=base64_encode(file_get_contents("atari".str_pad(($i+1),3,"0",STR_PAD_LEFT).".jpg"))?>" display="<?=($i==0)?"inline":"none"?>">
<set id="show<?=$i?>" attributeName="display" to="inline" begin="<?=($i==0?"0s;":"")?>show<?=($i+$numFrames-1)%$numFrames?>.end" dur="<?=1/$FPS?>s" fill="freeze"/>
<set id="hide<?=$i?>" attributeName="display" to="none"  begin="show<?=$i?>.end" dur="0.01s" fill="freeze"/>      
</image>
<?
}
?>
</svg>
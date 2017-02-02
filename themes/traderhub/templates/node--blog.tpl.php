<article<?php print $attributes; ?>>
  <?php print $user_picture; ?>
  <?php print render($title_prefix); ?>
  <?php if (!$page && $title): ?>
  <header>
    <h2<?php print $title_attributes; ?>><a href="<?php print $node_url ?>" title="<?php print $title ?>"><?php print $title ?></a></h2>
  </header>
  <?php endif; ?>
  <?php print render($title_suffix); ?>
  
  
  <?php
  if (!function_exists('get_string_between')) {
  function get_string_between($string, $start, $end){
    $string = ' ' . $string;
    $ini = strpos($string, $start);
    if ($ini == 0) return '';
    $ini += strlen($start);
    $len = strpos($string, $end, $ini) - $ini + 4;
    return substr($string, $ini, $len);
}
  }
  		global $base_url;
  $imagesrcbox = $base_url.'/sites/all/themes/traderhub/images/heart.png';
?>
  
  <div<?php print $content_attributes; ?>>
    <?php
      // We hide the comments and links now so that we can render them later.
      hide($content['comments']);
      hide($content['links']);
	  if($teaser){
		$title = field_view_field('node', $node, 'body', array('type' => 'title',));
		$title = $title['#object']->title;		
		$summary = field_view_field('node', $node, 'body', array('type' => 'text_summary_or_trimmed',));
		
		$image = field_view_field('node', $node, 'body', array('type' => 'body', ));
		$image = $image['#object']->body[und][0][value];
		$start = '/default/files/';	
		$end = '.';
		$imagesrc = get_string_between($image, $start, $end);

		$imagesrc = $base_url.'/sites/default/files/'.$imagesrc;

		?>
		<div class = "singleblogteaser">
			<div class = "singleblogteaserheader">
				<!--<div class = "singleblogteaserheaderFirstBox">
					<img src="<?php echo $imagesrcbox; ?>" alt="">
				</div>-->
			<?php if ($display_submitted): ?>
				<footer class="submitted">
					<?php $formatted_date = format_date($node->created, 'custom', 'j.m.Y');?>
					<?php echo $formatted_date; ?>
					<br> <?php echo t("Автор:").' <b>'.$name.'</b>'; ?>
					</footer>
			<?php endif; ?> 
			</div>
			<div class = "singleblogteasercontent">
				<div class = "singleblogteaserheaderleft">
					<div class = "singleblogteaserheaderlefttitle">
						<?php print_r ($title); ?>
					</div>
					<div class = "singleblogteaserheaderleftbody">
						<?php print render ($summary); ?>
					</div>
					<div class = "singleblogteaserheaderleftlink">
						<?php if (!empty($content['links'])): ?>
							<nav class="links node-links clearfix"><?php print render($content['links']); ?></nav>
						<?php endif; ?>
					</div>
				</div>
				<div class = "singleblogteaserheaderright">
				 <img src="<?php echo $imagesrc; ?>" alt=""> 
				</div>
			</div>		
		</div>
		<?php
	  }
	  else{?>
	  
		  <div class = "singleblogteaserheader">
				<!--<div class = "singleblogteaserheaderFirstBox">
					<img src="<?php echo $imagesrcbox; ?>" alt="">
				</div>-->
			<?php if ($display_submitted): ?>
				<footer class="submitted">
					<?php $formatted_date = format_date($node->created, 'custom', 'j.m.Y');?>
					<?php echo $formatted_date; ?>
					<br> <?php echo t("Автор:").' <b>'.$name.'</b>'; ?>
					</footer>
			<?php endif; ?> 
			</div>
			
		  <?php
		  print render($content);
	  }
    ?>
  </div>
  
  <div class="clearfix">
    

    <?php print render($content['comments']); ?>
  </div>
</article>
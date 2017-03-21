<article<?php print $attributes; ?>>
  <?php print $user_picture; ?>
  <?php print render($title_prefix); ?>
  <?php if (!$page && $title): ?>
  <header>
    <h2<?php print $title_attributes; ?>><a href="<?php print $node_url ?>" title="<?php print $title ?>"><?php print $title ?></a></h2>
  </header>
  <?php endif; ?>
  <?php print render($title_suffix); ?>

  
  <div<?php print $content_attributes; ?>>
    <?php
      // We hide the comments and links now so that we can render them later.
      hide($content['comments']);
      hide($content['links']);
	   global $base_url;
	  if($teaser){
	  }
	  else{?>
			<?php
			$field_title_second = field_view_field('node', $node, 'body', array('type' => 'field_title_second',));
			$field_box_title = field_view_field('node', $node, 'body', array('type' => 'field_box_title',));
			$field_box_image = field_view_field('node', $node, 'body', array('type' => 'field_box_image',));
			$field_box_body = field_view_field('node', $node, 'body', array('type' => 'field_box_body',));
			$body = field_view_field('node', $node, 'body', array('type' => 'body',));
			//$field_title_second = field_view_field('node', $node, 'body', array('type' => 'field_title_second',));
			for($x = 0; $x <=3; $x++){
				$field_title_second[$x] = $field_title_second['#object']->field_title_second['und'][$x]['value'];
				$field_box_title[$x] = $field_box_title['#object']->field_box_title['und'][$x]['value'];
				$field_box_image_[$x] = $field_box_image['#object']->field_box_image['und'][$x]['uri'];
				$field_box_image_src_[$x] = $base_url.'/sites/default/files/'.substr($field_box_image_[$x], 9);
				$field_box_body[$x] = $field_title_second['#object']->field_box_body['und'][$x]['value'];
				$field_title_second[$x] = $field_title_second['#object']->field_title_second['und'][$x]['value'];
			}
			$body = $body['#object']->body['und'][0]['value'];
			//echo "<pre>"; print_r ($body); exit;
			?>
			
			<div class = "jobSection">
				<div class = "jobSectionLine colorize">
					<div class = "jobSectionLineConteiner">
						<div class = "jobSectionSectionTitle">
							<?php echo $field_title_second[0];?>
						</div>
						<div class = "jobSectionOne">
							<div class = "jobSectionOneTitle">
								
							</div>
							<div class = "jobSectionImage">
								 <img src="<?php echo $field_box_image_src_[0];?>" alt="Smiley face">  
							</div>
							<div class = "jobSectionOneBody">
								<?php echo $field_box_body[0];?>
							</div>
						</div>
						<div class = "jobSectionOne">
							<div class = "jobSectionOneTitle">
								
							</div>
							<div class = "jobSectionImage">
								 <img src="<?php echo $field_box_image_src_[1];?>" alt="Smiley face">  
							</div>
							<div class = "jobSectionOneBody">
								<?php echo $field_box_body[1];?>
							</div>
						</div>
					</div>
				</div>
				
				<div class = "jobSectionLine">
					<div class = "jobSectionLineConteiner">
						<div class = "jobSectionSectionTitle">
							<?php echo $field_title_second[1];?>
						</div>
						<div class = "jobSectionOne">
							<div class = "jobSectionOneTitle">
								<?php echo $field_box_title[2];?>
							</div>
							<div class = "jobSectionImage">
								 <img src="<?php echo $field_box_image_src_[2];?>" alt="Smiley face">  
							</div>
							<div class = "jobSectionOneBody">
								<?php echo $field_box_body[2];?>
							</div>
						</div>
						<div class = "jobSectionOne">
							<div class = "jobSectionOneTitle">
								<?php echo $field_box_title[3];?>
							</div>
							<div class = "jobSectionImage">
								 <img src="<?php echo $field_box_image_src_[3];?>" alt="Smiley face">  
							</div>
							<div class = "jobSectionOneBody">
								<?php echo $field_box_body[3];?>
							</div>
						</div>
					</div>						
				</div>

				<div class = "jobSectionLine colorize2">
					<div class = "jobSectionLineConteiner">
						<?php echo $body;?>
					</div>						
				</div>				
				
			</div>
			
			
		  <?php
		 
	  }
    ?>
  </div>
  
  <div class="clearfix">
    

    <?php print render($content['comments']); ?>
  </div>
</article>
jQuery(document).ready(function() {
	jQuery(".speaker-details").addClass("hide");
	jQuery(".speaker-details").hide();
	jQuery(".speaker-image").click(function() {
		var idNo = this.id;
		jQuery("#speaker-details-" + idNo).addClass("block");
		jQuery(".speaker-details").not("#speaker-details-" + idNo).hide('400');
		jQuery("#speaker-details-" + idNo).toggle('400');
	});



});
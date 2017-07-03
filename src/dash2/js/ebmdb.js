$(document).ready(function() {

	console.log("ready!");

	$('input:checkbox').change(function() {

		$(".progress-bar").each(function() {

			var percent = Math.floor(Math.random() * 100) + 1

			if (percent > 70) {
				$(this).addClass("bg-danger");
			} else {
				$(this).removeClass("bg-danger");

			}
			$(this).css("width", percent + "%");
			$(this).html(percent + "%");

		});

		$(".basecounter").each(function() {

			var count = Math.floor(Math.random() * 15) + 1
			$(this).html(count + " resources found");

		});

	});

	setTimeout(function() {
		$('#startmodal').modal('toggle')
	}, 2000);

// document.querySelector('#clinicalfindings').scrollIntoView({ 
//   behavior: 'smooth' 
// });

	var nodes = [{
		"id": 3479,
		"group": "Movie",
		"label": "Aortic Dissection",
		"title": ""
	}, {
		"id": 3482,
		"group": "Person",
		"label": "Pulse Deficit",
		"title": ""
	}, {
		"id": 3480,
		"group": "Series",
		"label": "Third heart sound on auscultation",
		"title": ""
	}, {
		"id": 3481,
		"group": "Person",
		"label": "Chest pain radiation: Left Arm",
		"title": ""
	}, {
		"id": 3478,
		"group": "Movie",
		"label": "Pulmonary Embolism",
		"title": ""
	}, {
		"id": 3483,
		"group": "Movie",
		"label": "Tension Pneumothorax",
		"title": ""
	}];
	var edges = [{
		"from": 3482,
		"label": "LR+ 1",
		"to": 3480
	}, {
		"from": 3482,
		"label": "LR+ 0.5",
		"to": 3479
	}, {
		"from": 3481,
		"label": "LR+ 3",
		"to": 3478
	}, {
		"from": 3481,
		"label": "LR+ 2.5",
		"to": 3480
	}, {
		"from": 3481,
		"label": "LR+ 2",
		"to": 3483
	}, {
		"from": 3481,
		"label": "LR+ 1.2",
		"to": 3482
	}];
	var container = document.getElementById("fe4a17b5-aa7b-4770-a29b-d8b3156b239f");
	var data = {
		nodes: nodes,
		edges: edges
	};
	var options = {
		nodes: {
			shape: 'dot',
			size: 25,
			font: {
				size: 14
			}
		},
		edges: {
			font: {
				size: 14,
				align: 'middle'
			},
			color: 'gray',
			arrows: {
				to: {
					enabled: true,
					scaleFactor: 0.5
				}
			},
			smooth: {
				enabled: false
			}
		},
		physics: {
			enabled: true
		}
	};
	var network = new vis.Network(container, data, options);

});
#pragma strict
var smallTrack : Transform;
var mainCamera : Transform;

var lenght : Vector3;

var flag : boolean = false;
function Start () {
	lenght.x = 0;
	lenght.y = 0;
	lenght.z = 26;
}

function Update () {
		
	
			
}

function OnTriggerEnter(other : Collider)
{
			
			if(!flag)
			{
				var number : int = Random.Range(0,4);
				lenght.z += number;
				lenght = this.transform.parent.gameObject.transform.position + lenght;			
				var small_track = Instantiate(smallTrack,lenght,this.transform.parent.gameObject.transform.rotation);
				flag = true;
			}

			
}


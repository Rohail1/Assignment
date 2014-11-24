#pragma strict
var smallTrack : Transform;
var mainCamera : Transform;

var lenght : Vector3;
lenght.x = 0;
lenght.y = 0;
lenght.z = 26;
var flag : boolean = false;
//lenght =  this.transform.forward + lenght;
lenght = this.transform.parent.gameObject.transform.position + lenght;
function Start () {

}

function Update () {
		
	
			
}

function OnTriggerEnter(other : Collider)
{
			
			if(!flag)
			{
			
				var small_track = Instantiate(smallTrack,lenght,this.transform.parent.gameObject.transform.rotation);
				flag = true;
			}
//			Debug.Log(lenght);
			
}


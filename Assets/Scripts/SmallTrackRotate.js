#pragma strict
var longTrack : Transform;
var mainCamera : Transform;

var lenght : Vector3;
var rotation : Quaternion;
var flag : boolean = false;



function Start () {

lenght.x = 0;
lenght.y = 0;
lenght.z = 27;
rotation = this.transform.parent.gameObject.transform.rotation;
//rotation = Quaternion.Euler(0.0,0.0,0.0); 

}

function Update () {


}

function OnTriggerEnter(other : Collider)
{
			
			if(!flag)
			{
				var number : int = Random.Range(1,5);
				var angle : float = Random.Range(-46,0);
				lenght.z += number;
				lenght = this.transform.parent.gameObject.transform.position + lenght;
				rotation = Quaternion.Euler(angle,0.0,0.0);
				var long_track = Instantiate(longTrack,lenght,rotation);
				flag = true;
			}
			
}
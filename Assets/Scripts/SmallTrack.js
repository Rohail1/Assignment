#pragma strict
var longTrack : Transform;
var mainCamera : Transform;

var lenght : Vector3;
var flag : boolean = false;



function Start () {

lenght.x = 0;
lenght.y = 0;
lenght.z = 27;


}

function Update () {

//			Debug.Log(mainCamera.transform.position.z);

}

function OnTriggerEnter(other : Collider)
{
			
			if(!flag)
			{
				var number : int = Random.Range(0,4);
				lenght.z += number;
				lenght = this.transform.parent.gameObject.transform.position + lenght;
				var long_track = Instantiate(longTrack,lenght,this.transform.parent.gameObject.transform.rotation);
				flag = true;
			}
			
}
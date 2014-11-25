#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerExit(other : Collider){

		Destroy(this.transform.parent.gameObject);


}
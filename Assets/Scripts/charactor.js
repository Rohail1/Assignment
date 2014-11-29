#pragma strict

var positioncontrol : Vector3;

function Start () {

}

function Update () {

		var conntroller : CharacterController = GetComponent(CharacterController);
		if(conntroller.isGrounded)
		{
		
			positioncontrol = Vector3(Input.GetAxis("Horizontal"),0,Input.GetAxis("Vertical"));
//			positioncontrol.z = 2;
			positioncontrol = transform.TransformDirection(positioncontrol);
			positioncontrol *= 7;
			
			if(Input.GetButton("Jump"))
			{
			
				positioncontrol.y = 6;
			}
		
		}
		
		positioncontrol.y -= 9.8* Time.deltaTime;
		conntroller.Move(positioncontrol*Time.deltaTime);

}
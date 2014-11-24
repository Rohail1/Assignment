using UnityEngine;
using System.Collections;

public class cameraMovement : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		float xAxis = Input.GetAxis ("Horizontal") * 0.02f;
		float zAxis = Input.GetAxis ("Vertical") * 0.02f;

			if (Camera.current != null) {
			Camera.current.transform.Translate(new Vector3(xAxis,0.0f,zAxis));
				}

	}
}

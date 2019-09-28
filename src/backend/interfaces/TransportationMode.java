package backend.interfaces;

import java.util.ArrayList;

enum REQUEST_TYPE{
	GET,
	POST
}


public class TransportationMode {
	private String ID;
	private String availabilityURL;
	private REQUEST_TYPE avalType;
	//private ArrayList<Routes> availableRoutes;
	private ArrayList<Vehicle> avalVehicles = new ArrayList<Vehicle>();
	
	public TransportationMode(String modeID,String avalURL,REQUEST_TYPE reqType) {
		this.ID = new String(modeID);
		this.availabilityURL = new String(avalURL);
		this.avalType = reqType;
	}
	
	public ArrayList<Vehicle> requestAvailableVehicles(double lat, double lon, int radius) {
		ArrayList<Vehicle> retVal = new ArrayList<Vehicle>();
		
		//TODO use REST interface to request this
		
		return retVal;
	}
	
	public void chooseVehicle() {
		
	}
	
	
	
	
	
	
	
}

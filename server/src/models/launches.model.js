const launches = new Map();

let latestFlightNumber = 100;

const launch = {
    flightNumber : 100,
    mission: 'Kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 2023'),
    target: 'Kepler-442 b',
    customer: ['ZTM', 'NASA'],
    upcoming : true,
    success: true
}

launches.set(launch.flightNumber, launch);

function existsLaunchWithId(launchId){
    return launches.has(launchId)
}

function getAllLaunches(){
    return Array.from(launches.values());
}

function addNewLaunch(launch){
    latestFlightNumber++;
    launches.set(
        latestFlightNumber,
        Object.assign(launch, {
            success: true,
            upcoming: true,
            customer: ['Zero to Master', 'NASA'],
            flightNumber: latestFlightNumber,
        })
    )

}

function abortLaunchById(launchId){
    // launch.delete(launchId) // it deletes the whole object entirely 

    const aborted = launches.get(launchId);
    aborted.upcoming = false;
    aborted.success = false;

    return aborted;
}

module.exports = {
    addNewLaunch,
    getAllLaunches,
    existsLaunchWithId,
    abortLaunchById
}
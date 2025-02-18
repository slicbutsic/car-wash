import clientPromise from "@/lib/db";

interface Service {
  _id: string;
  name: string;
  duration: string;
  prices: {
    [key: string]: number;
  };
}

async function getServices(): Promise<Service[]> {
  const client = await clientPromise;
  const db = client.db("car-wash");
  const collection = db.collection("services");
  const services = await collection.find({}).toArray();
  return JSON.parse(JSON.stringify(services));
}

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <div>
      <h1>Services</h1>
      <ul>
        {services.map((service) => (
          <li key={service._id}>
            <h2>{service.name}</h2>
            <p>Duration: {service.duration}</p>
            <h3>Prices:</h3>
            <ul>
              {Object.entries(service.prices).map(([vehicleType, price]) => (
                <li key={vehicleType}>
                  {vehicleType}: ${price}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

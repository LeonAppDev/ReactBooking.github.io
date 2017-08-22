using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ParcelModel.Parcel;

namespace ParcelModel
{
    public interface IParcelService
    {
        ParcelEntity Identify(AbstractParcel inputOrder);
    }
}

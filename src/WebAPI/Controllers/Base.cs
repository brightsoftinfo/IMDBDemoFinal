using DataAccessLayer.Common.Helper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using static Services.Models.ResultModel;

namespace WebAPI.Controllers
{
    [Controller]
    public class BaseController : ControllerBase

    {
        public LoginAccount Account => (LoginAccount)HttpContext.Items["LoginAccount"];

        #region Protected Members

        /// <summary>

        /// Detailed Exception

        /// </summary>

        /// <param name="ex"></param>

        /// <returns></returns>

        protected object DetailedException(Exception ex)

        {

            var errormessage = ex.Message;

            if (ex.InnerException != null)

            {

                errormessage = "\n\nException: " + GetInnerException(ex);

            }

            var result = new Result

            {

                status = new Status

                {

                    code = (int)HttpStatusCode.InternalServerError,

                    message = errormessage

                }

            };

            return result;

        }



        /// <summary>

        /// Get Inner Exception

        /// </summary>

        /// <param name="ex"></param>

        /// <returns></returns>

        private string GetInnerException(Exception ex)

        {

            if (ex.InnerException != null)

            {

                return

                    $"{ex.InnerException.Message + "( \n " + ex.Message + " \n )"} > {GetInnerException(ex.InnerException)} ";

            }

            return string.Empty;

        }

        #endregion

    }
}

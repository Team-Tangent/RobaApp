using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Roba
{
    /// <summary>
    /// A container for validation errors used in business layer logic.
    /// Useful to return results from a workflow or errors based on status of back-end data
    /// or user record ownership.
    /// </summary>
    public class ValidationState<T>
    {
        public List<ValidationError> Errors { get; set; }
        public T ResultModel { get; set; }
        public ValidationState(T model)
        {
            ResultModel = model;
            Errors = new List<ValidationError>();
        }
        public ValidationState<T> Add(int statusCode, string message)
        {
            Errors.Add(new ValidationError { StatusCode = statusCode, Message = message });
            return this;
        }
        public ValidationState<T> Add(string message)
        {
            Errors.Add(new ValidationError { StatusCode = 400, Message = message });
            return this;
        }
        public ValidationState<T> AddRange(IEnumerable<string> messages)
        {
            foreach (var message in messages)
            {
                Errors.Add(new ValidationError { Message = message });
            }
            return this;
        }
        public ValidationState<T> Add(string propertyName, string message)
        {
            Errors.Add(new ValidationError { StatusCode = 400, PropertyName = propertyName, Message = message });
            return this;
        }
        public ValidationState<T> Add(string recordId, string propertyName, string message)
        {
            Errors.Add(new ValidationError { StatusCode = 400, RecordId = recordId, PropertyName = propertyName, Message = message });
            return this;
        }
        public ValidationState<T> Add(int recordId, string propertyName, string message)
        {
            Errors.Add(new ValidationError { StatusCode = 400, RecordId = recordId.ToString(), PropertyName = propertyName, Message = message });
            return this;
        }
        public ValidationState<T> Add(Guid recordId, string propertyName, string message)
        {
            Errors.Add(new ValidationError { StatusCode = 400, RecordId = recordId.ToString(), PropertyName = propertyName, Message = message });
            return this;
        }

        public IEnumerable<string> SerializeErrors()
        {
            if (Errors.Count == 0)
                return new List<string>();

            return Errors.Select(x => {
                //if (!string.IsNullOrWhiteSpace(x.RecordId))
                //    return string.Format("{0}: {1}: {2}", x.RecordId, x.PropertyName, x.Message);
                //if (!string.IsNullOrWhiteSpace(x.PropertyName))
                //    return string.Format("{0}: {1}", x.PropertyName, x.Message);
                return x.Message;
            })
            .Distinct();
        }
    }
}

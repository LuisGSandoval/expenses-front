import React, { useContext, useEffect } from "react";
import { CTX } from "../../Store/Store";
import { Button, Form, FormGroup, Label, Input, CustomInput } from "reactstrap";
import Flatpickr from "react-flatpickr";
import { uuid } from "uuidv4";
import { useCallback } from "react";

const AddExpenseForm = () => {
  const [state, dispatch] = useContext(CTX);
  const { expensesForm, expensesList } = state;
  const { title, qty, date, description, income } = expensesForm;

  const addExpense = useCallback(
    () =>
      dispatch({
        type: "EXPENSE_FORM",
        payload: {
          id: uuid(),
          income: "0",
          description: "",
          title: "",
          qty: "",
          date: "",
          payed: false
        }
      }),
    [dispatch]
  );

  useEffect(() => {
    addExpense();
    return () => {
      addExpense();
    };
  }, [addExpense]);

  const createExpense = e => {
    e.preventDefault();

    expensesList.push(expensesForm);

    dispatch({
      type: "EXPENSES_LIST",
      payload: expensesList
    });

    dispatch({
      type: "TOGGLE_MODAL",
      payload: { open: false, content: "" }
    });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    dispatch({
      type: "EXPENSE_FORM",
      payload: { ...expensesForm, [name]: value }
    });
  };

  return (
    <Form className="container my-3" onSubmit={createExpense}>
      <div className="form-group">
        <label htmlFor="income">Tipo</label>
        <select
          className="form-control"
          name="income"
          id="income"
          onChange={handleChange}
          value={income}
        >
          <option value="0">Gasto</option>
          <option value="1">Ingreso</option>
        </select>
      </div>

      <FormGroup>
        <Label for="title">* Título</Label>
        <Input
          type="text"
          name="title"
          value={title}
          id="title"
          required
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup>
        <Label for="qty">* Cantidad</Label>
        <Input
          type="number"
          name="qty"
          value={qty}
          id="qty"
          required
          onChange={handleChange}
        />
      </FormGroup>

      <div className="form-group">
        <label htmlFor="datej">* Fecha</label>

        <Flatpickr
          id="dueDate"
          options={{
            altFormat: "F j, Y",
            dateFormat: "D d-M-Y",
            locale: {
              firstDayOfWeek: 0
            }
          }}
          className="form-control"
          placeholder="para pagar el: "
          required
          value={date}
          onChange={e => {
            dispatch({
              type: "EXPENSE_FORM",
              payload: { ...expensesForm, date: e[0].toISOString() }
            });
          }}
        />
      </div>

      <FormGroup>
        <Label for="description">Descripción</Label>
        <Input
          type="textarea"
          name="description"
          value={description}
          onChange={handleChange}
          id="description"
        />
      </FormGroup>

      <FormGroup>
        <div>
          <CustomInput
            type="switch"
            id="payed"
            name="payed"
            label="Ya fue pagado"
            onChange={e => {
              const { checked } = e.target;
              dispatch({
                type: "EXPENSE_FORM",
                payload: { ...expensesForm, payed: checked }
              });
            }}
          />
        </div>
      </FormGroup>

      <div className="d-flex justify-content-around">
        <Button>Crear</Button>
      </div>
    </Form>
  );
};

export default AddExpenseForm;
